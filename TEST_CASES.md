# Test Case Register – Execute before marking Pass
| ID | Test | Expected result | Status |
|---|---|---|---|
| TC01 | Valid candidate registration | Account created | Pending |
| TC02 | Invalid email | 400 validation error | Pending |
| TC03 | Password under 8 chars | 400 validation error | Pending |
| TC04 | Duplicate email | 409 conflict | Pending |
| TC05 | Valid login | JWT returned | Pending |
| TC06 | Wrong password | 401 rejected | Pending |
| TC07 | No token on protected route | 401 denied | Pending |
| TC08 | Invalid/expired JWT | 401 denied | Pending |
| TC09 | Candidate creates job | 403 denied | Pending |
| TC10 | Recruiter creates job | 201 created | Pending |
| TC11 | Recruiter updates own job | 200 updated | Pending |
| TC12 | Recruiter updates another's job | 403 denied | Pending |
| TC13 | Admin updates another job | Allowed by policy | Pending |
| TC14 | Keyword search | Matching jobs returned | Pending |
| TC15 | Location/type filter | Matching jobs returned | Pending |
| TC16 | Page 2, limit 5 | Correct pagination | Pending |
| TC17 | Candidate applies | Application created | Pending |
| TC18 | Duplicate application | 409 conflict | Pending |
| TC19 | Recruiter views own applicants | Applicant list returned | Pending |
| TC20 | Recruiter views other's applicants | 403 denied | Pending |
| TC21 | Missing required job fields | 400/validation error | Pending |
| TC22 | Oversized JSON | Request rejected | Pending |
| TC23 | Security headers | Helmet headers present | Pending |
| TC24 | Mobile 375px | No major horizontal overflow | Pending |
| TC25 | Tablet 768px | Usable layout | Pending |
| TC26 | Desktop 1440px | Usable layout | Pending |
| TC27 | API health | 200 response | Pending |
| TC28 | Frontend production build | Build succeeds | Pending |

Statuses are Pending until you execute and record evidence. The included Jest file is a smoke test only; add full integration tests using a dedicated MongoDB test database.
