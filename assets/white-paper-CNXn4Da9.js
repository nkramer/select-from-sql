const e=`# Rethinking SQL Authoring

## Summary

SQL has become the common language of modern data systems, but it's a poor interaction model for exploratory analysis. Existing tools force users to choose between direct manipulation and reusable SQL. This paper argues that that choice is a false dichotomy and outlines an interaction model built on direct manipulation of tables to produce interoperable SQL.

## Diagnosis

**Exploration is the first step of production.** Every production pipeline and every dashboard starts with someone exploring the data and figuring out what query needs to be written.

**Data exploration is interactive and incremental.** We start with a small query, inspect the results, and gradually refine and elaborate the query as we learn more about the data. Complex queries are almost always built iteratively rather than written in one go.

**Today, interoperability means SQL.** All major data stacks speak SQL, and everyone in the data team is expected to understand it. SQL lets you move analytical logic between tools.

**Current tools force you to choose between direct manipulation and interoperability.** BI tools such as Power BI and Tableau let Users manipulate data visually, but the resulting logic is difficult to reuse outside those tools. SQL editors produce reusable logic, but force users to interact with the query text rather than the data itself.

**We need a tool that brings exploration and interoperability together.**

## Guiding principles

**Tables are the primary authoring surface.** Tables shouldn't just display query results. They should also be the interface for constructing queries. If you're looking at a table and decide you don't need a particular column, you shouldn't have to find the matching statement in your SQL and delete it, you should just delete the column.

**Queries evolve through small, local transformations.** Each operation should make an incremental change to the query rather than forcing the user to restructure the query around the new operation.

**SQL is the interoperability layer but not the interaction model.** SQL optimizes for expressive power and interoperability rather than common analytic intent. Window functions and rollups are good examples. They are powerful abstractions for the database engine, but awkward abstractions for users.

## Interaction principles

**Operate on analytical intent, not SQL syntax.** The interaction model should reflect how users think about data, not how it's expressed in SQL. A straightforward intent may require complex rewrites of the generated SQL.

**Prefer direct manipulation.** Frequently used operations should act directly on the selected data where possible, rather than requiring users to navigate menus, dialogs, or ribbons. Keyboard interactions often provide the most direct expression of user intent, while mouse interactions remain valuable for spatial manipulations such as reordering columns.

**Dense, information rich displays.** Tables are the primary authoring surface. Analytical work depends on manipulating and comparing many rows and columns simultaneously. Higher information density reduces scrolling and context switching.

**Earlier decisions remain editable.** Exploration is nonlinear, and users need to be able to revisit earlier decisions without redoing subsequent work. Whenever possible, users should be able to apply operations in any order and arrive at the same result.

## Interaction patterns

**Direct manipulation** is preferred when the target is visible and selectable. Analytical queries are manipulated primarily through columns rather than rows or cells. Moving, deleting, renaming, sorting, and grouping columns are all naturally expressed through direct manipulation.

**Guided interactions** are appropriate when an operation requires additional choices. Joins and pivots require selecting additional data, while aggregation and formatting require selecting among multiple possible transformations.

**Text** is the best tool for capturing arbitrary predicates and formulas, such as WHERE clauses and defining new columns.

## Architectural Principles

**Direct manipulation requires interactive latency.** Queries need to complete quickly enough that each interaction feels immediate so as not interrupt the user's train of thought. Running queries locally eliminates network latency and avoids the scheduling overhead of shared compute. These requirements lead to an embedded analytical database. Today, DuckDB is a strong fit for this model because of its performance on embedded analytical workloads.

**Maximize trust to maximize adoption.** Data teams are understandably reluctant to put sensitive business data into unfamiliar tools. Executing queries locally keeps data under the user's control, reducing governance concerns. Running inside the browser allows users to try the application without installing software or granting additional permissions.

## Challenges and open problems

**Maintaining interaction latency with scale.** The interaction model is built around immediate feedback, but latency inevitably degrades as data sizes increase. It's not clear how much latency users will tolerate, or to what extent asynchronous execution can preserve the feeling of direct manipulation.

**The limits of direct manipulation.** Not every SQL construct has an obvious direct-manipulation equivalent. Determining which interaction model best fits for each operation remains an open area of exploration.

**Balancing discoverability and information density.** Direct manipulation relies on users discovering interactions that are unobtrusive. Adding affordances can make the interface easier to learn, but every affordance competes with the data for screen space and attention. Finding ways to teach the interaction model without sacrificing data density remains an open problem.

**Generating idiomatic SQL.** Generating valid SQL is straightforward; generating SQL that people want to read and reuse is substantially harder. Likewise, editing existing SQL requires parsing and manipulating queries written by people and other tools, each with their own styles and conventions.

## Conclusion

SQL isn't going away. It's deeply embedded in the data ecosystem. But it doesn't have to be the primary way people interact with data. By separating the interaction model from the interoperability layer, we can bring exploration and interoperability together while remaining compatible with today's data stack.
`;export{e as default};
