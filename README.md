# Proposal for new repo structure

```
## Capitalized = directory
## lowercase = file
## (@apps/shared) = module is referenced under the "@apps" namespace

├── Apps
├   ├── Admin (@apps/admin)
├   ├── Patient (@apps/patient)
├   ├── Caregiver (@apps/caregiver)
├   ├   ├── Server
├   ├   ├── Client
├   ├   ├── Dist
├   ├   ├── node_modules
├   ├   ├── package.json
├   ├   └── ...
├   └── Shared (@apps/shared)
├       ├── Constants
├       ├── Utils
├       ├── Tools
├       ├── Client
├       ├   ├── Components
├       ├   ├── Reducers
├       ├   └── ...
├       ├── Server
├       ├   ├── Api
├       ├   ├── PublicApi
├       ├   └── ...
├       ├── node_modules
├       ├── package.json
├       └── ...
├── Services
├   ├── Auth (@service/auth)
├   ├── Media (@service/media)
├   ├── Organisation (@services/orgnisation)
├   ├   ├── node_modules
├   ├   ├── package.json
├   ├   └── ...
├   └── Shared (@services/shared)
├       ├── Constants
├       ├── Utils
├       ├── Tools
├       ├── node_modules
├       ├── package.json
├       └── ...
├── Shared (@shared)
├   ├── Constants
├   ├── Utils
├   ├── Tools
├   ├── node_modules
├   ├── package.json
├   └── ...
├── node_modules
├── package.json
├── lerna.json
└── ...
```

## Note on npm namespaces

Lerna allows us to handle repo modules (`@apps/patient`, `@services/auth`, etc) as if they were npm modules by linking. So instead of having to write relative paths to individual modules, we link internal modules which allows us to treat them as any other npm dependency.