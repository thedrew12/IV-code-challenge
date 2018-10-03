package api

import (
	"encoding/json"
	"errors"
	"net/http"
	"github.com/gorilla/mux"
	"iv-code-challenge/api/domain"
	"iv-code-challenge/api/services"
	"iv-code-challenge/api/utils"
	"log"
)

type submissionRouter struct {
	submissionService services.ISubmissionService
}

func NewSubmissionRouter(ss services.ISubmissionService, router *mux.Router) *mux.Router {
	submissionRouter := submissionRouter{ss}
	router.HandleFunc("/", submissionRouter.createSubmissionHandler).Methods("POST")
	return router
}

func (sr* submissionRouter) createSubmissionHandler(w http.ResponseWriter, r *http.Request) {
	sub, err := decodeSubmission(r)
	if err != nil {
		utils.Error(w, http.StatusBadRequest, "Invalid request payload")
		return
	}
	log.Println("DATA1", sub)
	err = sr.submissionService.Create(&sub)
	log.Println("DATA2", err)
	if err != nil {
		utils.Error(w, http.StatusInternalServerError, err.Error())
		return
	}

	utils.Json(w, http.StatusOK, sub)
}

func decodeSubmission(r *http.Request) (domain.Submission, error) {
	var s domain.Submission
	if r.Body == nil {
		return s, errors.New("no request body")
	}
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&s)
	return s, err
}