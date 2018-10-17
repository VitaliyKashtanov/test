import React, { Component } from 'react';
import './Cat.css';
import cat from './img/cat.png';

class Cat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }

  toggleClass = () => {
    this.setState({ selected: !this.state.selected });
    if(this.props.disable) {
      this.setState({selected: ''})
    }
  };

  render() {
    return <React.Fragment>
        <div className={this.state.selected ? 'cat cat_selected' : this.props.disable ? 'cat cat_disable' : 'cat'} onClick={this.toggleClass}>
          <div className="cat_inner cat_inner_overlay">
            <span className="cat_header">{this.props.header}</span>
            <h2 className="cat_title">{this.props.title}</h2>
            <span className="cat_description">{this.props.description}</span>
            <span className="cat_portions">{this.props.portions}</span>
            <span className="cat_present">{this.props.present}</span>
            <img src={cat} className="cat_img" />
            <div className={this.state.selected ? 'cat_weight cat_weight_selected' : this.props.disable ? 'cat_weight cat_weight_disable' : 'cat_weight'}>
              <span>{this.props.weight}</span>
              <span>кг</span>
            </div>
          </div>
          <p className="cat_sub_info">{this.props.subInfo}</p>
        </div>
      </React.Fragment>;
  }
}

export default Cat;