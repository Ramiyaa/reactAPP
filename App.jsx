import React from 'react';
//
import {
      Col,
      Navbar,
      Nav,
      NavItem
} from 'react-bootstrap'

class App extends React.Component {
      constructor(props) {
            console.log('im constructor');
            super(props);

            this.state = {
                  data: 0,
                  data1: 100,
                  data2: '',
                  array: []
            }
            
      };

      //    setNewNumber(newNumber) {
      //       console.log('####newnumber=',newNumber);
      //      // this.setState({data: this.state.data + 1, data1: this.state.data1 + 1,data2: newNumber})
      //      this.setState({data2: newNumber});
      //      console.log('####setState=',this.state.data2);
      //     // this.forceUpdate();
      //    }
      //    forceupdatehandler(){
      //          this.forceUpdate();
      //    }
      render() {
            console.log('render function');
            var buttonstyle = {
                  height:50,
                  width:75,
                  color: '#FF0000'
            }
            return (
                  <div>
                        <div>
                              <label>Employee id </label>
                              <input name='id' />
                              <label>Employee name </label>
                              <input name='name' />
                              <label>Employee age </label>
                              <input name='age' />
                              <br></br>
                              <label>Gender </label>
                              <input name='gender' />
                              <label>Employee Salary </label>
                              <input name='salary' />
                              <label>Designation </label>
                              <input name='designation' />
                              <br>
                              </br>
                              <button name='submit' style={buttonstyle} value='Submit'>Submit</button>
                        </div>
                  </div>
            );
      }
}
class Child extends React.Component {
      constructor(props) {
            super(props);

            this.state = {
                  data: 0,
                  data1: 100,
                  data2: '',
                  array: []
            }
            //var arg1='';
            this.childSetNumber = this.childSetNumber.bind(this);
            // this.setStateHandler = this.setStateHandler.bind(this);
            //this.forceupdatehandler = this.forceupdatehandler.bind(this);
      };
      childSetNumber() {
            console.log('####Inside the child function');
            this.props.handler('senthil');

      }
      componentWillReceiveProps(childprops) {
            console.log('##Child----componentWillReceiveProps', this.props.parentprop, '', this.props.parentprop1, 'prop3=', this.props.parentprop3, '##', childprops.parentprop3);
      }
      componentWillMount() {
            console.log('##Child----componentWillMount', this.props.parentprop, '', this.props.parentprop1, 'prop3', this.props.parentprop3);
      }
      componentDidMount() {
            console.log('##Child----componentDidMount', this.props.parentprop, '', this.props.parentprop1, 'prop3', this.props.parentprop3);
      }

      render() {
            var handletoupdate = this.props.handler;
            return (<div> Hello world</div>);
            //  return(<div> <button onClick={ this.childSetNumber}/>
            // </div>);
      }

}

class Child1 extends React.Component {
      componentWillReceiveProps() {
            console.log('Child1####=', this.props.parentprop);
      }
      render() {
            return <div>Child1</div>
      }
}

class Content extends React.Component {
      componentWillMount() {
            console.log('Component WILL MOUNT !')
      }
      componentDidMount() {
            console.log('Component DID MOUNT!')
      }
      componentWillReceiveProps(newProps) {
            console.log('Component WILL RECIEVE PROPS!')
      }
      shouldComponentUpdate(newProps, newState) {
            return true;
      }
      componentWillUpdate(nextProps, nextState) {
            console.log('Component WILL UPDATE!');
      }
      componentDidUpdate(prevProps, prevState) {
            console.log('Component DID UPDATE!')
      }
      componentWillUnmount() {
            console.log('Component WILL UNMOUNT!')
      }
      render() {
            return (
                  <div>
                        <h3>{this.props.myNumber}</h3>
                  </div>
            );
      }
}

class Content1 extends React.Component {
      componentWillMount() {
            console.log(' Content1--Component WILL MOUNT !')
      }
      componentDidMount() {
            console.log(' Content1--Component DID MOUNT!')
      }
      componentWillReceiveProps(newProps) {
            console.log(' Content1--Component WILL RECIEVE PROPS!')
      }
      shouldComponentUpdate(newProps, newState) {
            return true;
      }
      componentWillUpdate(nextProps, nextState) {
            console.log(' Content1--Component WILL UPDATE!');
      }
      componentDidUpdate(prevProps, prevState) {
            console.log(' Content1--Component DID UPDATE!')
      }
      componentWillUnmount() {
            console.log(' Content1--Component WILL UNMOUNT!')
      }
      render() {
            return (
                  <div>
                        <h3>{this.props.myNumber}</h3>
                  </div>
            );
      }
}
export default App; 