diary.md


The idea is relatively good at first glance. On the one hand we have a table of the % MMR vaccinations in schools across the States that we can use as a base in choropleth and on top of it map the preventable disease outbreaks in order to examine potentially high risk areas as vaccinations tend to lower.

Data for preventable disease outbreaks are nicely ordered and we can get them for free. Data for the scool vaccinations are not and we have to scrape them per year from here https://www.cdc.gov/vaccines/imz-managers/coverage/schoolvaxview/data-reports/vacc-coverage.html.

A nice stackoverflow question to scrape the trs of the table is here:

https://stackoverflow.com/questions/30688059/python-selenium-and-xpath-to-extract-all-rows-from-a-table 


Update 2, Saturday, 22, July, 2017

This has been a great learning experience for very many reasons. Everything is going wrong.

My intial plan of a choropleth + points map does not work, and everyone agrees. 
Furthermore the datasets do not allow for good comparisons or scatterplots because of different data types that do not seem to be able to be measured together. 

The main problem though is that the project at this point lacks an idea, and is not well defined in its mission and scope. 

With a lot of help (from the TAs and a friend who happens to know how to use matplotlib well) I managed to make the subplot map of the school vaccinations in the US. While it does not in itself solve the problems of the project, it does give us a good view of the different approaches in school vaccinations of different schools and thus during the weekend the aim is to find and narrow down what we are measuring and what is the question we are answering.
