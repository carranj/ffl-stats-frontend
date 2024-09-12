# Angular Dashboard Application

Welcome to the Angular Dashboard Application! This project uses Angular, Tailwind CSS, and Highcharts to create a responsive dashboard with data visualization.

## Table of Contents

1. [Design](#design)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Setup](#setup)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [Highcharts Integration](#highcharts-integration)

## Design
Design files can be found in the directory `design`. Files were created using Figma.

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (version 14.x or later)
- **npm** (Node Package Manager)

You can download Node.js and npm from [nodejs.org](https://nodejs.org/).

## Installation

### 1. Clone the Repository

```
git clone https://github.com/carranj/ffl-stats-frontend.git
cd angular-dashboard
```

### 2. Install Dependencies

Install the required dependencies using npm:
```
npm install
```

## Setup
### Configure Environment

Ensure that the necessary configuration files are in place. For instance, check that src/assets/mock-data/fantasy-points-all-managers-in-a-season.json exists with the correct data format.

### Run the Project Local

Run the Angular project using:
```
npm run start
```
Open your browser and navigate to http://localhost:4200 to view the application.

## Usage
### Navigating the Application
Dashboard: The main component of the application that displays the data visualization using Highcharts.

### Adding/Modifying Components

1. Create a New Component

Use Angular CLI to generate a new component in the components directory:
```
ng g c components/component-name
```

2. Modify Components

Edit the components in `src/app/components/` as needed.

## Project Structure
* src/app/components/: Contains all Angular components including line-chart and other UI components.
* src/assets/mock-data/: Contains mock data files used for charting and testing.
* src/app/app-routing.module.ts: Configures routes for the application.
* src/styles.scss: Global styles, including Tailwind CSS imports.

## Highcharts Integration

### Include Highcharts in Your Component

Import Highcharts and configure the chart in your component, as shown in `line-chart.component.ts`.

### Use Mock Data

Mock data should be placed in src/assets/mock-data/ and used in your components to initialize charts.