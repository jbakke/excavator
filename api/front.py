import bottle
from bottle import get, post, put, delete

# begin code to migrate to model
import sqlite3
# end code for migration

@get('/hello')
def hello():
	return 'hello'

@get('/comment/<id>')
def get_comment(id):
	db = sqlite3.connect('/home/jordan/webprojects/excavator/api/excavator.db')
	c = db.cursor()
	c.execute('SELECT body FROM comments WHERE rowid=?', (id,))
	result = c.fetchone()
	if result is not None:
		return result
	else:
		raise bottle.HTTPError()
	db.close()

application = bottle.default_app()
