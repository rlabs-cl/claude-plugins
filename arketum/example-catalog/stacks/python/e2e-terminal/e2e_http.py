"""HTTP requests for the end-to-end tests (a fixture of the Arketum catalog: never edited). Only the standard library."""
import json, urllib.error, urllib.parse, urllib.request


def _do(req, timeout=15):
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, r.read().decode('utf8', 'replace')
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode('utf8', 'replace')


def get(url, **params):
    if params:
        url += ('&' if '?' in url else '?') + urllib.parse.urlencode(params)
    return _do(url)


def get_json(url, **params):
    st, t = get(url, **params)
    try:
        return st, json.loads(t)
    except ValueError:
        return st, t


def post_json(url, data, method='POST'):
    st, t = _do(urllib.request.Request(url, data=json.dumps(data).encode(), method=method, headers={'Content-Type': 'application/json'}))
    try:
        return st, json.loads(t)
    except ValueError:
        return st, t


def post_form(url, data):
    return _do(urllib.request.Request(url, data=urllib.parse.urlencode(data).encode(), headers={'Content-Type': 'application/x-www-form-urlencoded'}))
