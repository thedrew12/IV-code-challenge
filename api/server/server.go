package server

import (
	"iv-code-challenge/api/services"
	"iv-code-challenge/api/handlers"
	"log"
	"net/http"
	"os"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type Server struct {
	router *mux.Router
}

func NewServer(ss services.ISubmissionService) *Server {
	s := Server{router: mux.NewRouter().StrictSlash(true)}
	api.NewSubmissionRouter(ss, s.newSubrouter("/submissions"))
	return &s
}

func (s *Server) Start() {
	log.Println("Listening on port 8080")
	if err := http.ListenAndServe(":8080", handlers.LoggingHandler(os.Stdout, s.router)); err != nil {
		log.Fatal("http.ListenAndServe: ", err)
	}
}

func (s *Server) newSubrouter(path string) *mux.Router {
	return s.router.PathPrefix(path).Subrouter()
}