# Data storage

There is no conventional database. `HealthcareRecords` stores `Record` values on-chain in `patientRecords`, including patient name, diagnosis, treatment, and timestamp.

Although the mapping is declared `private`, blockchain state is not confidential. On-chain records are persistent, replicated, and expensive or impossible to delete. A safe redesign should store only minimal references on-chain and keep encrypted clinical records off-chain with audited authorization and key management.
