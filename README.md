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

#### Fact

Facts are either known beforehand or is derived by a business rule. From the POV of our aggregates,
facts are datapoints that are immutable once known, or calculated once it is able to calclulate it's value.

Calculated facts are usually opportunistic and declarative, not imperative.

Known facts are usually immutable and do not trigger a recalculation unless explicitly request by
setting the RuleBehaviour of a rule to *AlwaysCalculate*  

```typescript
interface FactInterface {
    name?: string;
    path?: string;
    rule?: RuleInterface;
    rules?: RuleInterface[];
    pathMapping?: PathMappingInterface[];
    dataType?: DataType;
    type?: "Fact";
    sampleValue?: any;
    enumerations?: string[];
    documentation?: string;
}
```

Copyright Agileworks 2019