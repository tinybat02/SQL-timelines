import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { PanelOptions, FieldBuffer, IGroup, IItem } from 'types';
import Timeline from 'react-calendar-timeline';
import { processData } from './utils/helper';
import 'react-calendar-timeline/lib/Timeline.css';

interface Props extends PanelProps<PanelOptions> {}
interface State {
  groups: Array<IGroup>;
  items: Array<IItem>;
}

export class MainPanel extends PureComponent<Props, State> {
  state: State = {
    groups: [],
    items: [],
  };

  componentDidMount() {
    console.log('timelines ', this.props.data);
    if (this.props.data.series.length > 0) {
      const fields = this.props.data.series[0].fields as FieldBuffer[];
      const { groups, items } = processData(fields);
      this.setState({ groups, items });
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.data.series[0] !== this.props.data.series[0]) {
      this.setState({groups: [], items: []})
    }
  }

  render() {
    const { width, height } = this.props;
    const { groups, items } = this.state;

    return (
      <div
        style={{
          width,
          height,
        }}
      >
        <Timeline groups={groups} items={items} />
      </div>
    );
  }
}
