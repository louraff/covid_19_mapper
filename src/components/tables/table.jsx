import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';



class TableContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      field: null,
      order: null
    }
  }

  handleSort = (field, order) => {
    this.setState({
      field,
      order
    });
  }

  sorting = (order, column) => {
    if (!order) return (<span>&nbsp;↑/↓</span>);
    else if (order === 'asc') return (<span>&nbsp;&nbsp;<font color="white">↑</font></span>);
    else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="black">↓</font></span>);
    return null;
  }

  leStyle = (cell, row, rowIndex, colIndex) => {
    return rowIndex % 2 === 0 ? { backgroundColor: '#343A40' } : { backgroundColor: '#3E444A' }
  }

  countryStyle = (cell, row, rowIndex, colIndex) => {
    if (rowIndex % 2 === 0) {
      return {
        backgroundColor: '#343A40',
        fontWeight: "bold",
      };
    }
    return {
      backgroundColor: '#3E444A',
      fontWeight: "bold",
    };
  }

  render() {
    const columns = [{
      dataField: 'country',
      text: 'Country',
      sort: true,
      onSort: this.handleSort,
      sortCaret: this.sorting,
      headerStyle: {
        backgroundColor: '#636D78'
      },
      style: this.countryStyle

    }, {
      dataField: 'confirmed',
      text: 'Total Cases',
      sort: true,
      onSort: this.handleSort,
      sortCaret: this.sorting,
      headerStyle: {
        backgroundColor: '#636D78',
        color: '#18A2B8'
      },
      style: this.leStyle

    }, {
      dataField: 'recovered',
      text: 'Recovered',
      sort: true,
      onSort: this.handleSort,
      sortCaret: this.sorting,
      headerStyle: {
        backgroundColor: '#636D78',
        color: 'rgb(40,167,69)'
      },
      style: this.leStyle

    }, {
      dataField: "deaths",
      text: "Deaths",
      sort: true,
      onSort: this.handleSort,
      sortCaret: this.sorting,
      headerStyle: {
        backgroundColor: '#636D78',
        color: 'rgb(220,54,69)'
      },
      style: this.leStyle

    }, {
      dataField: 'activeCases',
      text: 'Active Cases',
      sort: true,
      onSort: this.handleSort,
      sortCaret: this.sorting,
      headerStyle: {
        backgroundColor: '#636D78'
      },
      style: this.leStyle


    }, {
      dataField: "criticalCases",
      text: "Critical Cases",
      sort: true,
      onSort: this.handleSort,
      sortCaret: this.sorting,
      headerStyle: {
        backgroundColor: '#636D78'
      },
      style: this.leStyle

    }, {
      dataField: 'perOneMillion',
      text: 'Cases per 1 Mil',
      sort: true,
      onSort: this.handleSort,
      sortCaret: this.sorting,
      headerStyle: {
        backgroundColor: '#636D78'
      },
      style: this.leStyle

    }, {
      dataField: "cfr",
      text: "C.F.R",
      sort: true,
      onSort: this.handleSort,
      sortCaret: this.sorting,
      headerStyle: {
        backgroundColor: '#636D78',
        color: '#FBBD08'
      },
      style: this.leStyle

    }];

    const { SearchBar } = Search;

    function customMatchFunc({
      searchText,
      value,
      column,
      row
    }) {
      if (typeof value !== 'undefined') {
        return value.startsWith(searchText);
      }
      return false;
    }

    return (
      <div>
        <h4 id="table-heading">Global Data</h4>
        <ToolkitProvider
          keyField="id"
          data={this.props.countries}
          columns={columns}
          search={{ customMatchFunc }}
        >
          {
            props => (
              <div>
                <SearchBar {...props.searchProps} placeholder="Search..." style={{ width: "250px", backgroundColor: "215, 213, 213" }} className="searchbar" />
                <hr />
                <BootstrapTable
                  {...props.baseProps}
                  id="bootstrap-table"
                  striped={true}
                  keyField="id"
                  data={this.props.countries}
                  columns={columns}
                  sort={{
                    dataField: this.state.field,
                    order: this.state.order
                  }}
                  headerClasses="header-class"
                />
              </div>
            )
          }
        </ToolkitProvider>
        <footer>Created by <a href="https://github.com/asiaellis5">Asia Ellis</a>, <a href="https://github.com/davidpaps">David Papamichael</a> and <a href="https://github.com/nicolasraffray">Nicolas Raffray</a> &nbsp;&nbsp; Source Code: <a href="https://github.com/davidpaps/covid_19_mapper">Github</a>&nbsp;&nbsp;Data Sources: <a href="https://github.com/CSSEGISandData/COVID-19">John Hopkins</a>, <a href="https://www.worldometers.info/coronavirus/">Worldometer</a>, <a href="https://github.com/pomber/covid19">Pomber</a></footer>
      </div>
    );
  }
}


export default TableContainer;