/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

export interface whereCondition {
  sortBy: any;
  amount: number;
  sortType: string;
  currentPage: number;
  category: string;
}

export interface query {
  sortBy?: string | any;
  amount?: number;
  id?: number;
  sortType?: string;
  currentPage?: number;
  category?: string;
}
