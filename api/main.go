package main

import (
	"iv-code-challenge/api/db"
	"iv-code-challenge/api/services"
	"iv-code-challenge/api/server"
	"log"
)

func main() {
	var err error
	
	session, err := db.NewSession()
	if err != nil {
		log.Fatalln("unable to connect to mongodb")
	}

	ss := services.NewSubmissionService(session.Copy(), "submissions-api", "submissions")
	s := server.NewServer(ss)

	s.Start()
}