import { DataFrame, Field, Vector } from '@grafana/data';
import { Moment } from 'moment';

export interface PanelOptions {}

export const defaults: PanelOptions = {};

export interface Buffer extends Vector {
  buffer: Array<number>;
}

export interface FieldBuffer extends Field<any, Vector> {
  values: Buffer;
}

export interface Frame extends DataFrame {
  fields: FieldBuffer[];
}

export interface IGroup {
  id: number;
  title: string;
}

export interface IItem {
  id: number;
  group: number;
  title: string;
  start_time: Moment;
  end_time: Moment;
}
