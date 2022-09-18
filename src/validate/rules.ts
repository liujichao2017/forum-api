import type { Rules } from 'async-validator';

export const channelRules: Rules = {
  name: {
    type: 'string',
    min: 2,
    required: true,
    message: 'channel name can not be null!',
  },
};

export const messageRules: Rules = {
  title: {
    type: 'string',
    min: 2,
    required: true,
    message: 'title can not be null!',
  },
  content: {
    type: 'string',
    min: 2,
    required: true,
    message: 'content can not be null!',
  },
  channel: {
    type: 'string',
    required: true,
    asyncValidator: (rule, value) => {
      return new Promise((resolve, reject) => {
        if (parseInt(value).toString() == "NaN" || parseInt(value) <= 0 ) {
          reject('channel must be a integer');  // reject with error message
        } else {
          resolve();
        }
      });
    },
  },
};

export const queryMessageRules: Rules = {
  page: {
    type: 'string',
    asyncValidator: (rule, value) => {
      return new Promise((resolve, reject) => {
        if (parseInt(value).toString() == "NaN" || parseInt(value) <= 0 ) {
          reject('page must be a integer');  // reject with error message
        } else {
          resolve();
        }
      });
    },
  },
  limit: {
    type: 'string',
    asyncValidator: (rule, value) => {
      return new Promise((resolve, reject) => {
        if (parseInt(value).toString() == "NaN" || parseInt(value) <= 0 ) {
          reject('limit must be a integer');  // reject with error message
        } else {
          resolve();
        }
      });
    },
  },
  channel: {
    type: 'string',
    asyncValidator: (rule, value) => {
      return new Promise((resolve, reject) => {
        if (String(value).trim() == '' || parseInt(value).toString() == "NaN" || parseInt(value) <= 0 ) {
          reject('channel must be a integer');  // reject with error message
        } else {
          resolve();
        }
      });
    },
  },
};