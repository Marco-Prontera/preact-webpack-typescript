start:
	docker-compose up -d --force-recreate --build
stop:
	docker-compose stop
destroy:
	docker-compose down
terminal:
	docker-compose exec node sh