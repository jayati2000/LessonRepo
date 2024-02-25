package com.example.lesson.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "lesson")
public class Lesson {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int lessonId;

	@Column
	private String lessonName;

	@Column
	private String lessonDescription;

	@Column
	private String lessonStatus;

	public Lesson() {
		// TODO Auto-generated constructor stub
	}

	public int getLessonId() {
		return lessonId;
	}

	public void setLessonId(int lessonId) {
		this.lessonId = lessonId;
	}
	
	public String getLessonName() {
		return lessonName;
	}

	public void setLessonName(String lessonName) {
		this.lessonName = lessonName;
	}

	public String getLessonDescription() {
		return lessonDescription;
	}

	public void setLessonDescription(String lessonDescription) {
		this.lessonDescription = lessonDescription;
	}

	public String getLessonStatus() {
		return lessonStatus;
	}

	public void setLessonStatus(String lessonStatus) {
		this.lessonStatus = lessonStatus;
	}

	public Lesson(int lessonId, String lessonDescription, String lessonStatus,String lessonName) {
		super();
		this.lessonId = lessonId;
		this.lessonDescription = lessonDescription;
		this.lessonStatus = lessonStatus;
		this.lessonName = lessonName;
	}

}
