import React from 'react';
import ColumnHeader from './columnHeader';
// import NavBar from './navBar';
import FilterPanel from './filterPanel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default class App extends React.Component
{
    constructor(props){
        super(props);
        this.state = { charityRows: [], firstTimeLoad: true};
    }
    componentDidMount(){
        if (this.state.firstTimeLoad === false){
            return;
        }
        const charityResult = [];
        // fetch('https://api.data.charitynavigator.org/v2/Organizations?' +
        //         'app_id=3f3f4a3b&' +
        //         'app_key=6b3dbcbf452059aaecb6b346d7bebad2&pageSize=5&' +
        //         'state=NY&' +
        //         'city=New%20Hyde%20Park&' +
        //         'zip=11040')
        fetch('https://api.data.charitynavigator.org/v2/Organizations?app_id=acad48f7&app_key=1caab9869fdb918b252c8f56de6b62ce&pageSize=1000&sort=RATING')
        .then(response => response.json())
        .then(charityArray => {
            
            console.log("charityArray: ",charityArray)
            charityArray.map(currObj =>{
                let charityObj = {}
                charityObj["charityName"] = currObj.charityName;
                charityObj["ein"] = currObj.ein;
                charityObj["websiteURL"] = currObj.websiteURL;
                charityObj['charityNavigatorURL'] = currObj.charityNavigatorURL;
                charityObj['category'] = currObj.category.categoryName;
                charityObj['cause'] = currObj.cause.causeName;
                charityObj['ratingImageURL'] = currObj.currentRating === undefined ? "" : currObj.currentRating.ratingImage.large;
                charityObj['advisory'] = currObj.advisories.severity === null ? "none" : currObj.advisories.severity ;
                const address = currObj.mailingAddress
                charityObj['address'] = address.city + ", " + address.stateOrProvince + " " + address.postalCode;
                charityResult.push(charityObj);
            })
            this.setState({charityRows: charityResult })
        });
    }



    render(){

        const charityRows = this.state.charityRows.map( (currCharity, index) =>{
            const keyId = "row"+index
            return (<div className="queryResultsRow" key={keyId} >
                        <div className="field"><a href={currCharity.websiteURL}>{currCharity.charityName}</a></div> 
                        <div className="field">{currCharity.address}</div>
                        <div className="field">{currCharity.category}</div>
                        <div className="field">{currCharity.cause}</div>
                        <div className="field"><img src={currCharity.ratingImageURL}></img> </div>
                        <div className="field">{currCharity.advisory}</div>
                    </div>)
        })

        return(
            // <React.Fragment>
            //     <FilterPanel />
            //     <ColumnHeader />
            //     <div className="queryResultsColumn">
            //     {charityRows}
            //     </div>
            // </React.Fragment>
            <div>
                <NavPanel />
                <Switch>
                    <Route exact path='/login'  component={Login}/>
                    <Route exact path='/' component={MainPage}/>
                </Switch>
            </div>

        )

    }
    



}