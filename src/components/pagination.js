/*
 * Copyright (c) 2016, Emiliano Eloi Silva Barbosa <emilianoeloi@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React, {Component} from "react";

class Pagination extends Component {

  paginate(page){
    this.props.onPageClick({
      ...this.props.pagination,
      offset: page*this.props.pages
    });
  }

  getItem(i){
    return (
      <li className={(i == this.currentPage) ? "active" : ""} key={i}><a href="javascript://" onClick={()=>{
        this.paginate(i);
      }}>{i+1}</a></li>
    );
  }

  getTotals(){
    return(
      <div>
        <p>Total de Páginas: {this.requestedPages || "-"}</p>
        <p>Total de Candidatos: {this.props.pagination.total_count || "-"}</p>
      </div>
    );
  }

  getPreviousLink(){
    return(
      <li>
        <a href="javascript://" aria-label="Previous" onClick={() => {
          let previousPage = this.currentPage - 1;
          previousPage = (previousPage < 0) ? 0 : previousPage;
          this.paginate(previousPage);
        }}>
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
    );
  }

  getNextLink(){
    return(
      <li>
        <a href="javascript://" aria-label="Next" onClick={() => {
          let nextPage = this.currentPage + 1;
          nextPage = (nextPage > this.requestedPages - 1) ? this.requestedPages - 1 : nextPage;
          this.paginate(nextPage);
        }}>
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    );
  }
  
  calculatePagination(pagination){
    this.showPaginaton = true;
    if(!pagination.total_count){
      this.showPaginaton = false;  
      return;
    }
    this.requestedPages = Math.ceil(pagination.total_count / pagination.limit);
    if(this.requestedPages < 2){
      this.showPaginaton = false;
      return;
    }
    this.currentPage = pagination.offset / pagination.limit;
    this.totalPages = (this.requestedPages < this.props.pages) ? this.requestedPages : this.props.pages;
    this.startPage = (this.requestedPages <= this.props.pages) ? 
      0 : (this.currentPage <= this.props.pages/2) ?
        0 : this.currentPage - this.props.pages/2;
  }

  render(){

    this.calculatePagination(this.props.pagination);
    
    if(!this.showPaginaton){
      return this.getTotals();
    }
    
    return (
      <nav>
        <ul className="pagination">
          {this.getPreviousLink()}
          {[...Array(this.totalPages)].map((x,i) => {
            if(this.startPage > this.requestedPages){
              return (null);
            }
            return this.getItem(i + this.startPage);
          })}
          {this.getNextLink()}
        </ul>
        {this.getTotals()}
      </nav>
    );
  }
}

export default Pagination;
