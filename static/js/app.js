// Assign url to a variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the json data and console log it
d3.json(url).then(function(data) {
    console.log(data);
});

// Create bar chart
function bar(sample_data) {

    // Assign variables for data to be tracked
    let samplevalues=sample_data.sample_values.slice(0,10).reverse();
    let otuids=sample_data.otu_ids.slice(0,10).reverse();
    let otulabels=sample_data.otu_labels.slice(0,10).reverse();

    // Format y-axis labels
    let y_labels=otuids.map(id=>"OTU ${id}");

    // Assign trace1 to bar chart
    let trace1 = {
        x: samplevalues,
        y: y_labels,
        text: otulabels,
        type: "bar",
        orientation: "h",
    };

    // Call plotly
    Plotly.newPlot("bar",[trace1])
};


// Create bubble chart
function bubble(sample_data) {

    
}


// Initialize the page with a dropdown selection
//function init() {

// Assign IDs to drop down menu
// Select the dropdown menu
    //let dropdownMenu=d3.select("#selDataset");

// Assign the value of the dropdown menu option to a variable
    //let dataset=dropdownMenu.property("value");

// Initialize the empty array for the names
    //let sample_name=[];

    // Populate the dropdown menu with the sample names
    //d3.json(url).then(data)


        //let sample_names=data.names;

        //sample_names.forEach(sample)=>{

            //console.log(sample);

            //dropdownMenu.append
        

