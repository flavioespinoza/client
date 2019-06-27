import React, { Component } from 'react';

interface Props {
	list: any
}

interface State {
	list: any
}

class List extends Component<Props, State> {
  // Initialize the state
  constructor(props: Props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getGraphData();
  }

  // Retrieves the list of items from the Express app
  getGraphData = () => {
    fetch('/api/getGraphData')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>Identity Graph Attributes</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item: any) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;