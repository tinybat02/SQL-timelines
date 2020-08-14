import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { PanelOptions, FieldBuffer, IGroup, IItem } from 'types';
import Timeline from 'react-calendar-timeline';
import moment, { Moment } from 'moment';
import { processData } from './utils/helper';
import 'react-calendar-timeline/lib/Timeline.css';

interface Props extends PanelProps<PanelOptions> {}
interface State {
  groups: Array<IGroup>;
  items: Array<IItem>;
  visibleTimeStart: Moment;
  visibleTimeEnd: Moment;
}
const initialState = {
  groups: [],
  items: [],
  visibleTimeStart: moment().add(-6, 'hour'),
  visibleTimeEnd: moment().add(6, 'hour'),
};

export class MainPanel extends PureComponent<Props, State> {
  state: State = { ...initialState };

  componentDidMount() {
    if (this.props.data.series.length > 0) {
      const fields = this.props.data.series[0].fields as FieldBuffer[];
      const { groups, items, visibleTimeStart, visibleTimeEnd } = processData(fields);
      this.setState({ groups, items, visibleTimeStart, visibleTimeEnd });
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.data.series[0] !== this.props.data.series[0]) {
      if (this.props.data.series.length > 0) {
        const fields = this.props.data.series[0].fields as FieldBuffer[];
        const { groups, items, visibleTimeStart, visibleTimeEnd } = processData(fields);
        this.setState({ groups, items, visibleTimeStart, visibleTimeEnd });
      } else {
        this.setState({ ...initialState });
      }
    }
  }

  render() {
    const { width, height } = this.props;
    const { groups, items, visibleTimeStart, visibleTimeEnd } = this.state;

    return (
      <div
        style={{
          width,
          height,
        }}
      >
        <Timeline groups={groups} items={items} visibleTimeStart={visibleTimeStart} visibleTimeEnd={visibleTimeEnd} />
      </div>
    );
  }
}
