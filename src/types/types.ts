'use strict';

export interface whereCondition {
  sortBy: string;
  amount: number;
  sortType: string;
}

export interface query {
  sortBy?: string;
  amount?: number;
  id?: number;
  sortType?: string;
}
