'use strict';

export interface whereCondition {
  sortBy: any;
  amount: number;
  sortType: string;
}

export interface query {
  sortBy?: any;
  amount?: number;
  id?: number;
  sortType?: string;
}
