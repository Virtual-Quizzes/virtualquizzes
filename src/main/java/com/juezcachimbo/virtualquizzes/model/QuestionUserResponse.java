package com.juezcachimbo.virtualquizzes.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QuestionUserResponse {
    private long question_id;
    private char response;
}
