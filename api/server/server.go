package server

import (
	"iv-code-challenge/api/services"
	"iv-code-challenge/api/handlers"
	"log"
	"net/http"
	// "os"
	"github.com/rs/cors"
	// "github.com/gorilla/handlers"
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
	handler := cors.New(cors.Options{
		AllowedOrigins: []string{
			"http://localhost:3000",
		},
		AllowedMethods: []string{"POST"},
		AllowedHeaders: []string{"*", ""}, // empty string works around a weird bug in cors package
	}).Handler(s.router)
	log.Println("Listening on port 8080")
	if err := http.ListenAndServe(":8080", handler); err != nil {
		log.Fatal("http.ListenAndServe: ", err)
	}
}

func (s *Server) newSubrouter(path string) *mux.Router {
	return s.router.PathPrefix(path).Subrouter()
}