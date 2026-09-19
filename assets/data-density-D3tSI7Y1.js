const e=`# Maximizing data density

Most data tools waste a lot of screen space, but it's hard to notice because this waste is so ubiquitous. With different design choices, you can fit 150% more data on the screen while making it easier to explore data.

![](./data-density/figure-1.png)

vs

![](./data-density/figure-2.png)

Data exploration is an iterative process: we start with a small query, look at the results, and gradually build and refine our query. Unfortunately, the data rarely fits on the screen. Each time you interrupt your train of thought to scroll around, you lose context. Fitting more data on the screen helps you stay in flow.

Modern data tools such as Databricks, Snowflake, Google Colab, and Hex get the basics right. They use automatic column widths, align text to the left and numbers to the right. They use a proportional sans serif font with reasonable font size (12-13px) and tabular numbers. They use subtle lines to separate rows and columns.

That's a good start, but it doesn't get us close to the information density you'll see in a professionally formatted table. To get there, we employ three key techniques: minimizing dead space, using compact representations, and facilitating comparisons.

## Eliminate Dead Space

There's unused space between the rows and columns of a typical data tool, and this presents opportunities:

- **Use multi-line headers.** For numeric data, the column name is often significantly wider than the numbers in the column, and many column names are multiple words. Word wrapping column names can significantly increase the number of columns fit on the screen. This looks even better if underscores are turned into spaces.
- **Don't put icons in the headers.** Many apps put icons in the headers to denote the column's data type, or the sort order, or to offer a button to filter. These take significant real estate for minimal value. Where icons are essential, they can go on another line.
- **Angled headers** save space when column names are long and the data is short. But they use more vertical space and can be harder to read.
- **Put less space between rows.** Most data apps add significant padding between rows of data. Databricks, for example, adds 50% to the height of each row. More space can make the table feel less intimidating, but at the cost of making the tool less functional. 16px rows are tight but readable with a 13px font, achieving roughly the same density as Microsoft Excel.

By eliminating the dead space, we go from the typical data tool to this:

![](./data-density/figure-3.png)

## Say more with less

Tightening the space between data points is important, but so is using less ink per data point. We can often say the same thing with fewer characters, particularly with numbers and times:

- **Abbreviate large magnitudes.** 12B is shorter and easier to read than 12,000,000,000.
- **Show less precision.** Nobody needs 10 digits after the decimal point, and when you ask someone for the time they almost never care about milliseconds.
- **Round your numbers.** In most cases, 1,001,423 is just a noisier version of 1,000,000. But you need to be  careful with this. You don't want to round phone numbers, Social Security numbers, or parts numbers. And some contexts expect all digits to be significant. e.g. Matthew Stafford threw for 4,707 yards in 2025, not 4,700.
- **Collapse redundant groups.** Tables are frequently grouped by the first few columns, and often several adjacent rows have the same value in the first column. We don't need to see those redundant values. We can blank those out.
- **NULL** is visually heavy, particularly given that it expressing an absence of data. In most contexts, simply leaving the cell blank is sufficient. Where the absence of data needs to be explicitly marked, a hyphen or n/a is appropriate.
- **Bools as checks.** Similar to nulls, TRUE and FALSE are visually heavy for the amount of data they communicate. A simple check mark ✓ is sufficient.
- **Make changing fast.** No representation works for all scenarios. Allowing the user to quickly change the representation makes aggressive formatting practical.

By saying more with less, we improve our results to this:

![](./data-density/figure-4.png)

## Facilitate comparisons

We've saved a lot of pixels, but let's give back a few to increase the ease of reading and comparing data:

- **Align the decimal point.** If different rows have different numbers of digits after the decimal point, many tools will give up and right-align the numbers and call that good enough. This makes it harder to compare numbers across rows.
- **Put commas between every 3 digits.** 1,000,000 is instantly recognizable, 1000000 is not.
- **Conditional coloring.** Show the top 10 values in green and the bottom 10 values in red, for example, to make data easier to process quickly.

By facilitating comparisons, we can present data like this:

![](./data-density/figure-5.png)

## Conclusion

Data density isn't about cramming more information on to the screen at all costs. It's about preserving context so you can stay focused on the data instead of navigating the interface. You have a finite number of pixels. Use them wisely.

If you want to explore data quickly with minimal context switching, try Select-From. It uses these technique techniques to keep you focused on your data.
`;export{e as default};
