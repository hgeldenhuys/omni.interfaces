# omni.interfaces
OmniRules Interfaces

`License: Agileworks Community License Agreement Version 1.0`

## Documentation

### Introduction

Omni-Interfaces is part of the OmniRules Suite of apps and the most foundational of all the packages. 
It contains all the interface definitions so it's lightweight if you need to interface with OmniRules
when starting a new software package.

Problem and solution domains are expressed in TypeScript interfaces or simple JSON, which is then used
to generate OmniRules decision artifacts and engines.

### Interfaces

#### Aggregate

An aggregate [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design), is a cluster or a group of associated objects 
that we treat as a unit for the purpose of data changes via rules. Each aggregate starts with a root 
and has a boundary. The boundary defines what is inside the aggregate. The root is a single starting-point
entity.

📓 _Coincidentally, the Aggregate entity is an aggregate root object in OmniRules._

📓 _We sometimes refer to an aggregate root as a BOM (Business Object Model) expressed in JSON._

```typescript
interface AggregateInterface {
    name: string;                               // The name of your aggregate root
    version?: VersionInterface;                 // Use this to audit your aggregates as they evolve
    facts: FactInterface[];                     // Facts are either known, or derived by a rule/rules
    documentation?: string;                     // It's always important to document your aggregate
}

export interface VersionInterface {
    major: number;
    minor: number;
    patch: number;
}
```

[See Aggregate](./omni/interfaces/aggregate.ts)

#### Fact

Facts are either known beforehand or are derived by a business rule. From the POV of our aggregates,
facts are datapoints that are immutable once known, or calculated once it is sufficient other
facts to determine it's result.

Calculated facts are usually opportunistic and declarative, not imperative. They lie dormant until the 
time is right. Aggregates can be executed over and over until all it's facts are known. Once known, the
fact does not change. 

Known facts are usually immutable and do not trigger a recalculation unless explicitly request by
setting the RuleBehaviour of a rule to *AlwaysCalculate*  

```typescript
interface FactInterface {
    name?: string;                              // The name of the fact. Eg: Eligibility
    path?: string;                              // Eg: Application.Eligibility 
    rule?: RuleInterface;                       // See Rule
    rules?: RuleInterface[];
    pathMapping?: PathMappingInterface[];       // Map dependency facts from you Business Object Model (BOM)
    dataType?: DataType;
    sampleValue?: any;                          // Useful for documentation and sample BOM generation
    enumerations?: string[];                    // If dataType is string, you can specify valid enums
    documentation?: string;                     // Again, always important to document everything
}
export interface PathMappingInterface {
    replaceName: string;                        // The required fact from the Rule POV
    withPath: string;                           // The fact path from the BOM POV
}

type DataType = "string" | "number" | "boolean" | "date" | "object" | "array" | "bigint";
```

[See Fact](./omni/interfaces/fact.ts)

#### Rule

A rule is what we use to implement our Business Rules. They can be defined atomically and should 
be very simple and expressive or declarative. Depending on how you write them, they can be reused 
by other aggregates.

Let's see an example rule called Eligible simply checks if an *Applicant* is over the age of 18. If
the age isn't known, the rule won't trigger and remain dormant until the applicant's age is known.

Sample Rule.statedAs code for rule called `Eligible`:

```typescript
ApplicantAge > 18
```

As simple as that. For single lines that's all you really need. If you wanted to combine it with another
fact, let's say no criminal record and you end up writing multiple lines, use the *theResultIs* function:

```typescript
const 
    hasNoCriminalRecord = CriminalRecord.length === 0,
    isOfAge = ApplicantAge > 18;
theResultIs(
    hasNoCriminalRecord && isOfAge
);
```

📓 Note that the uppercase variable that were not declared are assumed as facts and will present 
themselves to a rule once the BOM or Aggregate contains them. Eg:
```json
{
    "CriminalRecord": [],
    "ApplicantAge": 19
}
```

See [omni.models](https://github.com/hgeldenhuys/omni.models/network/alerts) for more details on path
mappings for more complex domains.

Avoid using too much or-logic, instead break your rules into smaller pieces of logic that will in turn
get used by another piece of rule. This allows us to write them simple, have a clear trace for our audit
because the calculation's inner state is kept immutable and is also very helpful during data analysis,
 AI training and troubleshooting.

```typescript
interface RuleInterface {
    name: string;                               // The name of your rule
    statedAs?: string;                          // A simple Javascript statement that expresses the rule
    dataType?: DataType;
    behaviour?: RuleBehaviour;                  // Determines when a rule is executed in an engine
    documentation?: string;                     // Always good to document stuff
}

type RuleBehaviour = "AlwaysCalculate" | "OnlyOnceWithAllFacts" | "OnceWithSomeFacts" | "Disabled";
type DataType = "string" | "number" | "boolean" | "date" | "object" | "array" | "bigint";
```

[See Rule](./omni/interfaces/rule.ts) 

Copyright Agileworks 2019

License: [Agileworks Community OpenSource License Agreement](./license.md)