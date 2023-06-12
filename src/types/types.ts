'use strict';

export interface whereCondition {
  sortBy: string;
  amount: number;
}

export interface query {
  sortBy?: string;
  amount?: number;
  id?: number;
}
