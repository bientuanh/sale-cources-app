import { ConditionType } from '../../enum/service/search-condition.enum';

export interface IConditionParam {
  conditions?: {
    key: string;
    value: string;
    type: ConditionType;
  }[];
  fields?: string[];
  sortFields?: {
    field: string;
    desc: boolean;
  }[];
  page?: number;
  limit?: number;
}
