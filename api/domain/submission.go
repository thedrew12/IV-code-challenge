package domain

import (
	"gopkg.in/mgo.v2/bson"
)

// Submission Struct (Model)
type Submission struct {
	ID          string  `json:"id"`
	FirstName   string  `json:"firstName"`
	LastName    string  `json:"lastName"`
    CompanyName string	`json:"companyName"`
  	WorkEmail   string	`json:"workEmail"`
  	PhoneNumber string	`json:"phoneNumber"`
}

type SubmissionModel struct {
	ID          bson.ObjectId `bson:"_id,omitempty"`
	FirstName   string  
	LastName    string  
  	CompanyName string	
  	WorkEmail   string	
  	PhoneNumber string	
}