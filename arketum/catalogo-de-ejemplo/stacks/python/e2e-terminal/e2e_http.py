"""Peticiones HTTP para las pruebas de extremo a extremo (fijación del catálogo de Arketum: no se edita). Solo la biblioteca estándar."""
import json, urllib.error, urllib.parse, urllib.request


def _hacer(req, timeout=15):
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, r.read().decode('utf8', 'replace')
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode('utf8', 'replace')


def get(url, **params):
    if params:
        url += ('&' if '?' in url else '?') + urllib.parse.urlencode(params)
    return _hacer(url)


def get_json(url, **params):
    st, t = get(url, **params)
    try:
        return st, json.loads(t)
    except ValueError:
        return st, t


def post_json(url, datos, metodo='POST'):
    st, t = _hacer(urllib.request.Request(url, data=json.dumps(datos).encode(), method=metodo, headers={'Content-Type': 'application/json'}))
    try:
        return st, json.loads(t)
    except ValueError:
        return st, t


def post_form(url, datos):
    return _hacer(urllib.request.Request(url, data=urllib.parse.urlencode(datos).encode(), headers={'Content-Type': 'application/x-www-form-urlencoded'}))
