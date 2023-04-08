import { rest } from 'msw';
import * as data from '../../components/Layout/dataLayout.json';

export const handlers = [
  rest.get(
    'https://api.unsplash.com/photos/?client_id=T_WBzHCyEvDlZ2IItceILiDVrwuhwTVDEg0Oh3QV6ic',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(data));
    }
  ),
];
