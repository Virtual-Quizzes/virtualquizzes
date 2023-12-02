package com.juezcachimbo.virtualquizzes.model;

import lombok.*;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class EvaluationRequest {

    private Long evaluation_id;
    private List<QuestionUserResponse> user_response;

}
