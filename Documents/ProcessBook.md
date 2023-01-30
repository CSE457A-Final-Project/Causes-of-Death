# Process Book

## Basic Info

### Project Title

Causes of Deaths

### Members

| Name            | Email                 | ID     |
| --------------- | --------------------- | ------ |
| ChenXiao Liu    | chenxiao.l@wustl.edu  | 499688 |
| Pingchuan Huang | h.pingchuan@wustl.edu | 503954 |
| Hongyi Xu       | hongyi.x@wustl.edu    | 499173 |

### GitHub

- Repo: <https://github.com/csex57/causeofdeath>
- Page: <https://csex57.github.io/causeofdeath>

## Overview and Motivation

People die for various reasons. Sometimes we only know about some diseases that appear more in the public eye such as cancers and car accidents. However, some diseases that also take many lives each year do not receive enough attention. With continuous medical advances and technological developments, many diseases disappeared. However, some new diseases started growing up. It would be helpful if one could gather all the death reasons and death count together and show it properly to the public. In this case, we would like to show all the death reasons and counts for every country or region. We also want to show the trend of different death reasons to let the public know which death reason needs more attention. This will give intuition into the future direction of medical research, and the focus of each country or region on different diseases.

### Objectives

- We would like to effectively illustrate and rank death reasons, death counts, and death rates.
- Users should be able to see the global death rate rank through the years.
- Users should be able to see each year's top 3 causes of death reason.
- Users should be able to view all the death types and their death count trends through the years.
- Users should be able to see every country or region’s people death rate and the death rate for each disease.

## Related Work

The motivation and the project's content are inspired by the data from Kaggle and the design of Assignment 2. Throughout Assignment 2,  we visualized the election outcomes and the contribution of different states over multiple years, we are inspired by the design of the timeline widget that users can click on and switch from different years. We found it helpful and meaningful to help people catch and consider the trend of numbers over years.

![relatedWork](.\assets\relatedWork.png)

Kaggle: <https://www.kaggle.com/datasets>

Assignment2: <https://wustl.instructure.com/courses/90301/assignments/451475>

## Questions

### What's the main content or elements that this project wants to visualize?

We would like to effectively illustrate and rank death reasons and death counts among different death types. For example, users should be able to see the number of people who died from Drowning in 2015. Users should also be able to see the top 3 causes of death reason in 2015.  In this way, users can view all the death types and their influence through the years. We also want to show every country or region’s death rate and the death rate for each disease so that users can know which death reason is the most serious in their country or region.

#### Benefits

- Data can be filtered by different countries or regions, different years, and different death reasons. Users can see any kind of data that they would like to know.
- Good intuition for the future medical research focus and the country or region government's social health insurance focus.

### How to accomplish those goals with your visualization properly?

We will first think about how to build our visualization, and what components or charts we should use to make our visualization clean and display the data. We then put ourselves in the user's shoes and think about what information they might want to know and how they like to see that information. We will do our best to plan and display each chart that needs to be displayed while trying to learn new knowledge to solve some possible problems or techniques that are not easy to implement.

#### Benefits

- Our visualizations will be readable and usable. It will be a user-friendly visualization.
- Good intuition for the future medical research focus and the country or region government's social health insurance focus. The data that needs to be displayed will not be confusing, and the information that the data wants to convey will be clearly shown.

### How did these questions evolve throughout the project

We managed to get the map working and colored each country or region based on the death rate. Each county's areas also have tooltips showing up when hovering, such that users can get a clear idea of the death numbers, death rates, and the population of that country or region. Users can switch the map between 2D and 3D.

We also managed to create stacked bars to show different death types' death counts and death rates in each country or region. Users can select different years and search countries or regions in the search field.

We also created bar charts to show every death type's influence each year in the world. Users can also sort them by both descending or ascending sequences. We colored them by their severity.

## Data

We found our dataset Kaggle.

- Cause of Deaths around the World (Historical Data): <https://www.kaggle.com/datasets/iamsouravbanerjee/cause-of-deaths-around-the-world>

The main dataset (the second one) contains the death count of various reasons for each country or region from 1990 to 2019.

## Data Processing and Exploratory Data Analysis

### Do you expect to do substantial data cleanup?

No, the dataset has no significant missing fields. The dataset is very clean in the first place. We only need to do some (maybe a lot) calculations.

### What quantities do you plan to derive from your data?

- The proportion of deaths counts for various reasons.
- The percentage of death in the population.
- Each country or region’s different death counts for different death reasons every year.
- Ranking.

### How will data processing be implemented?

We are going to sum and sort the data based on the death count of various reasons and group them by country or region/reason. The death percentage can be calculated from the data above as well.

### Evolve throughout the project

When working on the implementation, we found that this dataset's formation is not ideal for developing and writing JavaScript code. So we employed Python for the data processing and re-generated data format. We mainly changed the structure of data, from CSV to JSON which not only works better with JavaScript but made the data much clear to analyze and use, for each year and country or region. The following shows the original CSV and the processed JSON.

![csvdata](.\assets\csvdata.PNG)

![jsondata](.\assets\jsondata.PNG)

## Design Evolution

### Design upon Project Proposal

The design of the webpage would be divided into 2 parts. The left portion would be a navigation that allows users to switch between different visualizations. On the right side, each part's visualization will be displayed.

- **Title and Icons**: There will be a title and an icon that shows our project on the top left part. We will use the black font color and an electrocardiogram logo to better match our project content.
- **Navigation Bar**: There will be a navigation bar on the left side. Users can click those different buttons in the navigation bar to go into different content visualizations.
- **Earth Map**: There will be a thumbnail of the 3D Earth map in the left bottom corner. Users can see the general world death rate map there. Countries will be given different colors with the rank of the death rate.
- **Stacked Bar Chart:** For Vis 1 in the navigation, there will be a stacked bar chart showing different countries or regions' death counts. Each country or region represents a bar. Every bar will be split into different parts with different colors, each color will represent one disease type. Users can clearly see which disease type occupies the most length of each bar.
- **Line Chart**: For Vis 1 in the navigation, there will be a death count line chart in the bottom right part. It will show the trend of the total number of deaths per year in the world. Users can also use a dropdown to filter it by country or region.
- **2D  Map**: For the Vis 2 in the navigation, there will be a 2D map showing all of the worlds on the right side. When Users hover their mouse on any specific country or region part. Then a tooltip will show this country or region's death count, death rate, and top 3 death reasons. Users can also update this map by year.
- **Another Bar Chart**: For Vis 3 in the navigation, there will be another bar chart showing the total number of world death for each disease. Every death reason will be ranked and shown on this bar chart. The horizontal coordinate will be the cause of death and the vertical coordinate will be the proportion of deaths by that factor to the total number of deaths. Users can also update this map by year. In this way, users can view each year's death factor proportion and know how these diseases developed or disappeared.

![Screenshot 2022-10-30 at 2.23.26 PM](.\assets\Screenshot 2022-10-30 at 2.23.26 PM.png)

#### 3D Map Design vs. 2D Map Design

3D Map: A 3D ball-shaped map rotates automatically. The ball shape map’s advantage is visually appealing. The disadvantage of this type of map is it can not show one specific country or region directly to users until users drag the map to find it. Sometimes users may feel struggling to find that country or region.

![Screenshot 2022-10-30 at 2.24.35 PM](.\assets\Screenshot 2022-10-30 at 2.24.35 PM.png)

2D Map: A 2D map that shows all of the countries or regions on the stage. The advantage is that it can show all the countries or regions clearly and make it easier for users to find one specific country or region. The disadvantage of this is it may occupy most space of the website and is not visually appealing enough.

![Screenshot 2022-10-30 at 2.25.09 PM](.\assets\Screenshot 2022-10-30 at 2.25.09 PM.png)

#### Line Chart

This line chart shows the death count trend from 1900+ to 2015. Users can also use a dropdown to choose one country or region to see this country or region’s death count trend.

![Screenshot 2022-10-30 at 2.26.18 PM](.\assets\Screenshot 2022-10-30 at 2.26.18 PM.png)

#### Pie Chart vs. Bar Chart

Although the pie chart is useful for showing the proportions of death reasons per countries or regions, it is restricted by size. There are many different reasons and countries that the pie chart would be too crowded to show useful information.

![Screenshot 2022-10-30 at 2.26.57 PM](.\assets\Screenshot 2022-10-30 at 2.26.57 PM.png)

The bar chart, however, can be extended horizontally infinitely, and easy to see the order sorted by death counts, and the reasons for the top death rate can be easily shown, which easily becomes our best choice.

![Screenshot 2022-10-30 at 2.27.35 PM](.\assets\Screenshot 2022-10-30 at 2.27.35 PM.png)

#### Stacked Bar Chart

The stacked bar chart also meets our requirements, and it shows more detailed information about like sub-categories compared to a simple bar chart.

![IMG_FEFC0567610C-1](.\assets\IMG_FEFC0567610C-1.jpeg)

### Some design changes during the implementation

#### Component layout changes

In the proposal design, we aimed to make the 3D map, stacked bar chart, and line chart together on one page. But in the actual implementation process, we found that it was not ideal to make all of the components together on one page. This will make each visualization small and make users hard to see them.

We also planned to set 2D and 3D maps on different pages. After consideration, we thought that both 2D and 3D maps show the same information. They just give users a different visualization experience. So it did not make sense to make them on different pages. We decided to make them together on a page and gave users choices to switch between them.

#### Change the dropdown into the search bar

In the proposal design, we thought we could use a dropdown to search a country or region or death reason information. However, during implementation, we found that there were a lot of death reasons and more than 200 countries or regions. It was obvious that using dropdown would ruin the user experience. Finally, we decided to use a search bar instead to let users search by themselves.

#### Remove the line chart

We planned to create a line chart showing each country or region's death trend every year. However, we no longer make all the components on one page. In this case, we need to move this line chart to a new page. It could be a little redundant because the year selection of the map also already shows the trend of the death count and rate.

## Implementation

### Overall Layout

![](assets\navigation.png)

There is a navigation for users to switch between different visualizations. This navigation also shows our project's title and logo.

### Geo Graph

![](assets\GeoGraph1.png)

On the geo graph page, users can select a year from the year chart on the left side. Users can spin this 3D map and hover the mouse over any area to show this country or region's tooltip showing the death count and death rate this year. Users can also switch the map type on the top side.

![](assets\GeoGraph2.png)

2D map visualization.

### Stacked Bar Chart

![](assets\StackedBar1.png)

On the stacked bar chart page, users can also select a year and there will be stacked bar charts showing each country or region's proportion for each death reason. Different death reasons will occupy different widths and show different colors with consist on their severity. Users can also hover their mouse over one specific bar to see this death reason's influence on this country or region. In addition, each country or region's total death numbers show at the end of each country or region's bar.

![](assets\StackedBar2.png)

Users can use the search bar to get results that users are concerned about by searching the keyword of the country or region's name.

### Bar Chart

![](assets\BarChart1.png)

On the bar chart page, users can select different years as well. All death types' influence on the whole world will show as bars. These death-type bars will have different widths and colors related to their severity. Users can hover the mouse on one bar to see this death reason's information on the tooltip.

![](assets\BarChart2.png)

![](assets\BarChart3.png)

Users can sort these death reasons with either descending or ascending sequences.

### Process Book

![](assets\ProcessBook.png)

Our website's process book will show on the process book page. Users can read our process book to know our visualization design process and motivation.

### About

The "About" page will show our project's GitHub link or other useful information.

## Evaluation

We successfully gathered and processed all of the related useful data including the world death data, and world population data. We effectively visualized those data as we want. Via using our visualization, users can effectively know each country or region's death trend with different death types every year. Users can also figure out which death reason has the most severity for a country or region or the whole world. This will be a good intuition for the future medical research focus and the country or region government's social health insurance focus. 

Our visualization works perfectly, it can clearly show all of the needed information properly. Users will not feel confused when seeing our visualizations and using our website. We tried our best to provide users good user experience through every detail such as the loading time of data, the choices of colors, and the size of components.

Our website can be further improved in many areas. It can be extended to show more things. For example, we can also find the dataset that shows the healing rate and healing cost for each disease. Then we can add it to our visualization so that it can provide more helpful and insightful information.
