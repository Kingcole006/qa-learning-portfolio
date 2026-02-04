# Day 3 Reflection

Today I practiced finding edge cases, writing clearer test cases, and distinguishing real bugs from expected behavior.

## Key takeaways
- Systematically enumerate edge cases (inputs, states, timing, permissions).
- Make test cases explicit: preconditions, steps, expected results, teardown.
- Use a reproducibility + spec check approach to decide defect vs intended behavior.

## Quick defect checklist
- Reproduce reliably
- Compare to requirements/specs
- Assess user impact & frequency
- Check for consistency and regressions
- Confirm with developers/product if ambiguous

## Edge-case examples found
- Empty/invalid inputs
- Concurrent actions / race conditions
- Permission-boundary scenarios
- Timezone/date boundary behavior

## Tomorrow — focus
- Learn API testing fundamentals (requests, status codes, payload validation)
- Practice with tools: curl/Postman, automated tests (pytest + requests)

## Action items
1. Convert 2 UI test cases to API-level tests.
2. Draft a defect decision template for triage.
3. Try a simple Postman collection against a sample API.