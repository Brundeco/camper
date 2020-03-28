@extends('layouts.app')

@php
  $title = 'Nieuws';
  $menuItem = 'news';
@endphp

@section('content')
<div class="container">

  <h1>News</h1>

  <ul class="articles-list">
    @for ($i = 0; $i < 3; $i++)
      <li>
        <div class="article-teaser">
          <h2><a href="news-detail.html">Lorem ipsum</a></h2>
          <p>03/02/2017</p>

          <div class="article-teaser__body">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium&#8230;</p>
          </div>

          <p><a href="news-detail.html" class="button-more">Read more</a></p>
        </div>
      </li>
    @endfor
  </ul>

  <div class="pagination">
    <p>
      <span class="prev arrow"><a href="news.html" class="pagination-pager">&laquo;</a></span>
      <a href="news.html" class="pagination-pager">1</a>
      <span class="pagination-pager active">2</span>
      <a href="news.html" class="pagination-pager">3</a>
      <span class="next arrow"><a href="news.html" class="pagination-pager">&raquo;</a></span>
    </p>
  </div>

</div>
@endsection
