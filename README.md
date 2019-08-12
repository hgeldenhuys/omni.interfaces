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

```typescript
interface AggregateInterface extends IdentifierInterface {
    version?: VersionInterface;
    facts: FactInterface[];
    decisionObjectType?: DecisionObjectType;
    type?: "Aggregate";
    documentation?: string;
}
``` 

Copyright Agileworks 2019