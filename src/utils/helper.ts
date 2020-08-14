import { FieldBuffer, IGroup, IItem } from '../types';
import moment from 'moment';

export const processData = (data: Array<FieldBuffer>) => {
  // const hashArray = data[0];
  const startTimeArray = data[1];
  const endTimeArray = data[2];

  const groups: Array<IGroup> = [];
  const items: Array<IItem> = [];
  startTimeArray.values.buffer.map((item, i: number) => {
    groups.push({ id: i, title: `Anonym ${i + 1}` });
    items.push({
      id: i,
      group: i,
      title: '',
      start_time: moment.unix(item),
      end_time: moment.unix(endTimeArray.values.buffer[i]),
    });
  });

  return { groups, items };
};
