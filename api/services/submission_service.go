package services

import (
  "iv-code-challenge/api/domain"
  "iv-code-challenge/api/db"
  "gopkg.in/mgo.v2"
)

type SubmissionService struct {
  collection *mgo.Collection
}

type ISubmissionService interface {
	Create(s *domain.Submission) error
}

func newSubmissionModel(s *domain.Submission) *domain.SubmissionModel {
  return &domain.SubmissionModel{
    FirstName: s.FirstName,
    LastName: s.LastName,
    CompanyName: s.CompanyName,
    WorkEmail: s.WorkEmail,
    PhoneNumber: s.PhoneNumber }
}

// Create a New Submission
func NewSubmissionService(session *db.Session, dbName string, collectionName string) *SubmissionService {
  collection := session.GetCollection(dbName, collectionName)
  return &SubmissionService {collection}
}


func(ss *SubmissionService) Create(s *domain.Submission) error {
  sub := newSubmissionModel(s)
  return ss.collection.Insert(&sub)
}