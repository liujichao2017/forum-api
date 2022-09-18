export interface Channel {
  id?:   number;
  name:  string;
}

export interface Message {
  id?:        number;
  title:      string;
  content:    string;
  channel:    string;
  createdAt:  string;
}

export interface MessageQueryParams {
  page?:    string;
  limit?:   string;
  channel:  string;
}
