.PHONY: database


database:
	@psql -c "CREATE DATABASE nodepg"
	@psql -c "CREATE USER nodepg_user WITH ENCRYPTED PASSWORD 'local_insecure_pass'"
	@psql -c "GRANT ALL PRIVILEGES ON DATABASE nodepg TO nodepg_user"
	@psql -d nodepg -f src/database.sql
	
application:
	@npm i