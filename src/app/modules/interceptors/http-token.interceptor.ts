import { HttpInterceptorFn } from '@angular/common/http';

export const HttpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const apiUrl = 'http://localhost:5555/api'
  req = req.clone({
    url: `${apiUrl}${req.url}`,
  });
  return next(req);
};
