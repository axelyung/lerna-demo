# Proposal for new repo structure

```
├── Apps
├   ├── Admin
├   ├── Patient
├   ├── Caregiver
├   ├   ├── Server
├   ├   ├── Client
├   ├   ├── Dist
├   ├   ├── node_modules
├   ├   ├── package.json
├   ├   └── ...
├   └── Shared
├       ├── Constants
├       ├── Utils
├       ├── Tools
├       ├── node_modules
├       ├── package.json
├       └── ...
├── Services
├   ├── Auth
├   ├── Media
├   ├── Organisation
├   ├   ├── node_modules
├   ├   ├── package.json
├   ├   └── ...
├   └── Shared
├       ├── Constants
├       ├── Utils
├       ├── Tools
├       ├── node_modules
├       ├── package.json
├       └── ...
├── node_modules
├── package.json
└── ...
```