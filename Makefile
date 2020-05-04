.PHONY: database


database:
	@psql -c "CREATE DATABASE nodepg"
	@psql -c "CREATE USER nodepg_user WITH ENCRYPTED PASSWORD 'local_insecure_pass'"
	@psql -c "GRANT ALL PRIVILEGES ON DATABASE nodepg TO nodepg_user"
	@psql -d nodepg -c "GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO nodepg_user"
	@psql -d nodepg -c "GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO nodepg_user"
	@psql -d nodepg -f src/database.sql
	
application:
	@npm i

dotenv:
	@printf "PGDATABASE=nodepg\n \
			 PGUSER=nodepg_user\n \
          	 PGPASSWORD=local_insecure_password\n \
          	 PGHOST=127.0.0.1\n \
          	 PGPORT=5432" \
    | tr -d "[:blank:]" \
    > ./src/.env
