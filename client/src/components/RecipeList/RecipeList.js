import React from "react";
import Card from "../Card";
import Book from "../Book";
import { List } from "../List";
import { Col, Row, Container } from "../../components/Grid";
import "./RecipeList.css";

const RecipeList = () => (
    <div className="recipess">
    <Container className="recipess">
<       Row>
          <Col size="md-12">
          Hello
            {/* <Card title="Results" style="width:1000px">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.recipe.uri}
                      title={book.recipe.label}
                      subtitle={book.recipe.calories}
                      link={book.recipe.url}
                      authors={book.recipe.source}
                      description={book.recipe.ingredientLines.join(", ")}
                      image={book.recipe.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.recipe.uri)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card> */}
          </Col>
        </Row>
    </Container>
    </div>
);

export default RecipeList;