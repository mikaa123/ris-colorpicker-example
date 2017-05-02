import React, { Component } from 'react';
import { connectRefinementList } from 'react-instantsearch/connectors';
import classnames from 'classnames';
import './style.scss';

class Color extends Component {
  static propTypes = {
    color: React.PropTypes.array.isRequired,
    cls: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool,
    clickCb: React.PropTypes.func.isRequired
  };

  handleClick = () => {
    this.props.clickCb(this.props.cls, this.props.color);
  };

  render() {
    return (
      <div
        className={classnames(`color ${this.props.cls}`, {
          'color--selected': this.props.selected
        })}
        onClick={this.handleClick}
      />
    );
  }
}

class ColorPicker extends Component {
  static propTypes = {
    refine: React.PropTypes.func.isRequired,
    colorMap: React.PropTypes.object.isRequired
  };

  state = {
    selected: ''
  };

  select = (cls, color) => {
    if (this.state.selected === cls) {
      cls = '';
      color = '';
    }
    this.props.refine(color);
    this.setState({ selected: cls });
  };

  render() {
    const colorMap = this.props.colorMap;
    return (
      <div className="colorpicker">
        {Object.keys(colorMap).map(cls => {
          const color = Array.isArray(colorMap[cls])
            ? colorMap[cls]
            : [colorMap[cls]];
          return (
            <Color
              key={cls}
              color={color}
              cls={cls}
              selected={this.state.selected === cls}
              clickCb={this.select}
            />
          );
        })}
      </div>
    );
  }
}

export default connectRefinementList(ColorPicker);
