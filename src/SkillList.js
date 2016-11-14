import React from 'react';
import {ListGroup, ListGroupItem, Button, Glyphicon} from 'react-bootstrap';

export function SkillList(props) {
  return (
            <div>
				
			 <ListGroup>
				<ListGroupItem> Critical Attack <Button bsSize="xsmall"><Glyphicon glyph="minus" /></Button>
				<Button bsSize="xsmall"><Glyphicon glyph="plus" /></Button>
				</ListGroupItem>
				<ListGroupItem> Disembowel <Button bsSize="xsmall"><Glyphicon glyph="minus" /></Button>
				<Button bsSize="xsmall"><Glyphicon glyph="plus" /></Button>
				</ListGroupItem>
			  </ListGroup>
			  </div>
  );
}