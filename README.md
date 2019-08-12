# omni.interfaces
OmniRules Interfaces

`License: Agileworks Community License Agreement Version 1.0`

## Documentation

### Introduction

Omni-Interfaces is part of the OmniRules Suite of apps and the most foundational of all the packages. 
It contains all the interface definitions so it's lightweight if you need to interface with OmniRules
when starting a new software package.

### Interfaces

#### Aggregate

An aggregate or aggregate root from Domain Driven Design, is a cluster or a group of associated objects 
that we treat as a unit for the purpose of data changes via rules. Each aggregate starts with a root 
and has a boundary. The boundary defines what is inside the aggregate. The root is a single starting-point
entity.

🧐🤓 Coincidentally, the Aggregate entity is an aggregate root object in OmniRules

```typescript
interface AggregateInterface {
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

[See Aggregate](./blob/master/omni/interfaces/aggregate.ts)

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
    replaceName: string;
    withPath: string;
}

type DataType = "string" | "number" | "boolean" | "date" | "object" | "array" | "bigint";
```

(See Fact)[./blob/master/omni/interfaces/fact.ts]

Copyright Agileworks 2019