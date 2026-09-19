const e=`# Select-From glossary

This glossary describes the terminology used by the declaration surface in
\`lib/\` and the implementation and UI in \`src/\`. SQL terms retain their usual
meaning; the entries below call out Select-From-specific meanings where they
differ.

**Aggregate** - The command and dialog for applying an aggregate function to one or more selected columns.

**Aggregate function** - A reduction such as \`sum\`, \`count\`, \`average\`, \`median\`, or \`stddev\` applied to one or more rows.

**Alias** - An optional output name assigned to a projection expression with SQL \`AS\`, such as \`SUM(amount) AS total\`.

**Available columns** - The column names currently reported by a source schema and available to the query builder.

**Bar chart** - The inline numeric chart rendered inside a result column when bar-chart mode is enabled for that column.

**Cell selection** - A rectangular selection of result-grid cells, represented by a \`CellRange\`.

**Column ID** - A stable internal identity for a column, used to preserve references when a displayed column name or result order changes.

**Column range** - A contiguous range of selected result-grid columns, represented by a \`ColumnRange\`.

**Column selection** - The set of result-grid columns targeted by column commands such as aggregate, format, move, or exclude.

**Common table expression (CTE)** - A named \`WITH name AS (...)\` definition containing a SELECT statement. Select-From models each CTE as a \`CteQuery\` with a \`statement\` and exposes it as its own query tab.

**Column view** - Per-column rendering settings: the format, width, conditional coloring, and bar chart for each result column.

**Conditional coloring** - A column-view rule that colors result values by rank, percentile, or numeric threshold.

**Command** - An application action invoked from a menu or keyboard shortcut, such as Select, Aggregate, Join, or Run.

**Correlation** - The data-science operation that compares a focused reference result column with another numeric result column.

**Computed column** - A projected column produced by an expression rather than a direct source-column reference; the UI commonly creates one through the Formula or New column command.

**Dataset** - User-selected tabular input, currently the contents of a CSV or Parquet file, that can be loaded and referenced by a query.

**Dataset catalog** - The browser-local catalog of dataset records and file access handles used to find recently opened CSV and Parquet inputs.

**Dataset reference** - The SQL-side reference to a dataset, including the token and optional stable dataset ID/slug used to reconnect it to a local file.

**Dataset source mapping** - Metadata that maps a dataset reference in saved SQL to the file name that supplies it at execution time.

**Data source** - A selectable \`FROM\` input. It may be a dataset or another query’s CTE; this is broader than \`Dataset\`.

**Display column** - A column in the order and naming shown by the results grid after projection resolution and presentation rules are applied.

**DuckDB** - The embedded analytical SQL engine that executes queries and reads loaded CSV or Parquet data.

**DuckDB-Wasm** - The WebAssembly build and browser adapter used to run DuckDB in the client.

**DuckDB view** - A named DuckDB database relation created with \`CREATE VIEW\`; this database concept is separate from Select-From view settings.

**Execution SQL** - The complete SQL string sent to DuckDB, including dependency-ordered CTEs and any runtime dataset bindings.

**Execution status** - The workspace state of a query run: idle, running, succeeded, or failed.

**Filter** - The broad UI term for a condition that limits rows or aggregate inputs. In SQL, qualify it as a \`WHERE\` clause for pre-grouping rows, a \`HAVING\` clause for post-grouping results, or an aggregate \`FILTER\` predicate for one aggregate’s inputs.

**File access handle** - The browser capability used to read or write a local or remote dataset or query file, subject to the user’s permission.

**Formula** - User-entered SQL expression text used to create or redefine a projection item.

**Format profile** - The per-column display settings held in a \`FormatProfile\`, including format type, commas, rounding, and significant figures.

**Format** - The rule that converts one value into display text. A format profile stores the settings for that conversion.

**FROM clause** - The SELECT statement’s primary data source, represented as either a dataset reference or a CTE reference.

**Group by** - The grouping behavior of a SELECT statement; Select-From uses DuckDB’s \`GROUP BY ALL\` when \`groupByAll\` is enabled.

**HAVING clause** - A post-grouping predicate applied after grouping, represented by one or more \`HavingClauseItem\` values.

**Header view** - Result-header rendering settings: friendly headers and angled headers. Grid separators belong to the table view.

**Join** - A query operation that combines the SELECT statement’s primary \`FROM\` source with a second source using a supported join type and, when required, an \`ON\` column pair.

**Keyboard mode** - The optional interaction mode that exposes command keystrokes in an overlay and emphasizes keyboard-first operation.

**Limit** - The maximum number of rows a SELECT statement may return, serialized as SQL \`LIMIT\`.

**Main SELECT statement** - The document’s final \`SelectStatement\`, stored in \`QueryDocument.main\`; its result is the primary result shown by the application.

**Metadata comments** - Trailing Select-From SQL comments that preserve view, dataset-source, or summary-row information without changing ordinary query semantics.

**Null representation** - The display choice for SQL \`NULL\` cells, such as blank, dash, \`null\`, \`NULL\`, or \`n/a\`; it does not change the underlying value.

**Offset** - The number of leading rows skipped by a SELECT statement, serialized as SQL \`OFFSET\`.

**Order by** - The ordered list of expressions and ascending/descending directions used to sort query results.

**Outcome** - In regression, the selected dependent numeric column the model attempts to explain.

**Parameter binding** - The conversion of named query parameters into values safely supplied to DuckDB as a prepared query.

**Pivot** - A transformation that turns distinct values of one column into output columns while applying an aggregate function to another column.

**Table view** - Result-table rendering settings: repeated-value hiding, NULL display, and grid separators.

**View** - Settings that describe how data is rendered into pixels. A column view, header view, table view, or workspace view is a specialized view; SQL view and DuckDB view are separate concepts.

**View settings** - The application’s complete collection of rendering settings, including column, header, table, and workspace views.

**Projection** - The ordered SELECT list of a SELECT statement: the expressions that become output columns.

**Projection expression** - The expression inside a projection item. The structured model distinguishes a direct column reference, an aggregate expression, and arbitrary SQL.

**Projection item** - One structured entry in a SELECT statement’s projection, with an internal ID, expression, optional alias, and optional comment.

**Query** - The complete \`.sql\` file or SQL concept, including its CTEs and main SELECT statement.

**QueryDocument** - The precise internal type for the complete structured query model: zero or more CTEs plus the main SELECT statement.

**Query identity** - The saved-query ID and slug used to associate a query document with a file and a route; the ID is stable while the slug is a human-readable URL/file-derived value.

**Query catalog** - The browser-local catalog of saved query records, including IDs, slugs, file names, access handles, and update times.

**Query parameter** - A named string and value entered in the Parameters dialog before execution.

**Query schema** - The source-column metadata for a query tab, including available names, stable column IDs when known, data types, and a data source label.

**Query tab** - The UI editor for the main SELECT statement or a CTE. The main tab is identified by \`mainTabId\`; each CTE tab is identified by its CTE ID.

**SQL view** - The SQL editing surface, either the SQL dialog or the docked SQL panel. It can show the full execution SQL or only the active tab’s statement text.

**Result column** - A column returned by DuckDB, with a result name, stable result column ID when available, and optional data type.

**Results grid** - The spreadsheet-like table that renders result columns and rows and handles focus, selection, scrolling, resizing, and views.

**Result view** - The derived display model used by the results grid, including visible columns, formatted rows, widths, alignments, hidden repeated values, and bar-chart geometry.

**Result snapshot** - A columns-and-rows value captured for clipboard operations or CSV, TSV, or Parquet export.

**Regression** - The data-science operation that fits a multiple linear model from one outcome column and one or more predictor columns, returning coefficients and diagnostics.

**Predictor** - In regression, a selected independent numeric column used to explain or predict the outcome.

**Sample** - A SELECT statement operation that limits input to a requested number or percentage of rows using DuckDB’s reservoir or Bernoulli sampling method and a seed.

**Schema column** - A \`QuerySchemaColumn\` record containing a stable column ID, name, and optional DuckDB data type.

**SELECT statement** - One modeled \`SELECT ... FROM ...\` unit. \`SelectStatement\` is the precise internal type for that unit, including its source, joins, projection, filters, grouping, ordering, sampling, limits, and offsets.

**Select all** - The command that selects every column currently displayed in the results grid.

**Set operation** - A query operation that combines the SELECT statement’s result with another source using \`UNION\`, \`INTERSECT\`, or \`EXCEPT\`.

**Source column** - A column supplied by the selected input schema or upstream CTE; it is distinct from a computed or renamed result column.

**SQL draft** - SQL text edited for a query tab that has not necessarily been parsed successfully or executed; a draft records whether it is parseable.

**SQL completion** - Context-aware suggestions for columns, DuckDB functions, or known string values while editing SQL.

**SQL highlighting** - View-only styling of SQL tokens such as keywords, quoted text, comments, and aliases in the SQL view.

**SQL parser** - The domain code that converts SQL text into a \`QueryDocument\` or \`SelectStatement\` and returns a structured \`ParseResult\`.

**SQL serializer** - The domain code that converts the structured query model back into SQL text.

**SQL tokenizer** - The domain code that divides SQL into tokens such as identifiers, quoted text, numbers, operators, comments, and symbols.

**Subquery** - A genuinely nested SELECT in SQL syntax, such as a SELECT inside parentheses or an expression. It remains SQL text and is not a separate editable tab or model object.

**Summary rows** - Generated subtotal and optional whole-table total rows based on grouped query results; Select-From stores their configuration and metadata separately from ordinary SQL clauses.

**Shortcut** - A keyboard binding that invokes a command, usually as a single key or a group prefix followed by a key.

**Store** - A framework-neutral state container exposing current values and actions; the application has stores for query tabs, results, selection, session, UI, and undo/redo.

**Undo unit** - A before-and-after snapshot covering query SQL, selection, scroll position, and tab context, used by undo and redo.

**WHERE clause** - A pre-grouping row predicate represented by one or more \`WhereClauseItem\` values.

**Workspace view** - Global rendering settings: panel presence and layout, theme, menu visibility, and animations.

**Workspace** - The application-facing aggregate of the current query document, active tab, schemas, parameters, results, selection, views, execution status, and history.

## Inconsistent terminology

- **Dataset / data source / table / file** - Use \`dataset\` for the user’s CSV or Parquet content, \`data source\` for a selectable \`FROM\` input, \`table\` for a DuckDB runtime relation, and \`file\` for the storage object.

- **Query / SQL / SQL query / query document / SELECT statement / subquery** - The UI uses “query” for the complete document and individual SQL views. Use \`query\` for the complete document or SQL file, \`QueryDocument\` for the internal structured model, \`SELECT statement\` for one modeled SELECT unit, \`subquery\` for a genuinely nested SELECT in SQL syntax, and \`SQL\` for text.

- **Filter / WHERE / where clause / filter clause** - Use “Filter” for the broad UI concept. Use \`WHERE\` clause, \`HAVING\` clause, or aggregate \`FILTER\` predicate for the specific SQL stage; do not call these stages interchangeable “filter clauses.”

- **Column / source column / result column / display column** - “Column” is used for several lifecycle stages. Use \`source column\`, \`result column\`, or \`display column\` when the distinction affects behavior.

- **Friendly headers** - The feature that turns aggregate and underscored result-column names into readable labels. Use \`header view\` for the containing settings.

- **SQL panel / SQL dialog / SQL view** - These names describe related but distinct SQL surfaces. Use \`SQL view\` as the umbrella term, then specify \`SQL dialog\` or \`SQL panel\` for the concrete surface.

- **Selected / focused / active** - These are sometimes used casually as if interchangeable. Use \`focused\` for the current cell/tab keyboard target, \`selected\` for the chosen range or tab, and \`active\` for the current tab or command context.

## Redundant terms and representations

- **Query store / workspace store** - Both describe application query state. The workspace store is the canonical aggregate model; the slice stores (\`queryStore\`, \`queryTabsStore\`, \`resultsStore\`, and related stores) remain as compatibility/adaptation state during the transition.

- **Projection item** - A structured, ID-bearing SELECT-list expression represented by \`ProjectionItem\`.

- **Selected columns / projection items** - The older query state can represent a SELECT list either as selected column names plus aggregate-function/alias maps or as explicit projection items. Prefer projection items for expressions that are not simple column selections.

- **Query tab / CTE tab** - A CTE tab is the UI form of a CTE, while the main tab is the UI form of the main SELECT statement. Use \`query tab\` for the UI and tab-oriented model/state logic.

- **Format / formatting / view** - Use \`format\` for converting a value into display text, \`format profile\` for its configuration, and \`formatting\` for the operation. Use \`column view\`, \`header view\`, \`table view\`, or \`workspace view\` for the relevant rendering settings; use \`view settings\` for the complete collection.
`;export{e as default};
